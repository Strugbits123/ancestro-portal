// import clientPromise from "@/app/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const client = await clientPromise;

//     const db = client.db("ancestro-portal"); // change to your DB
//     const collection = db.collection("job-applications");

//     const result = await collection.insertOne({
//       ...body,
//       createdAt: new Date()
//     });

//     return NextResponse.json({ success: true, id: result.insertedId });
//   } catch (error) {
//     console.error("Error saving form:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/job-applications/route.js   (or your current route)

import clientPromise from "@/app/lib/mongodb";
import sgMail from "@/lib/sendGrid";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, position } = body;


    // Save to DB
    const client = await clientPromise;
    const db = client.db("ancestro-portal");
    const collection = db.collection("job-applications");

    const result = await collection.insertOne({
     ...body,
      createdAt: new Date(),
    });

    const cleanName = fullName?.trim() || "Applicant";
    const cleanEmail = email?.trim().toLowerCase();
    console.log("Clean Email:", cleanEmail);
    const cleanPosition = position?.trim() || "Not specified";

    const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL; // Must be verified!

    // ──────────────────────────────────────────────
    // 1. Email to Applicant (Confirmation)
    // ──────────────────────────────────────────────
    if (cleanEmail && FROM_EMAIL) {
      sgMail
        .send({
          to: cleanEmail,
          from: FROM_EMAIL,
          templateId: "d-8040a1ccd98e4f00a6acd80cbe819d29", // ← PUT YOUR CLIENT TEMPLATE ID HERE
          dynamicTemplateData: {
            name: cleanName,
            email: cleanEmail,
            position: cleanPosition,
          },
        })
        .catch((err) =>
          console.error("Client email failed:", err.response?.body || err.message)
        );
    }

    // ──────────────────────────────────────────────
    // 2. Email to Admin (Notification)
    // ──────────────────────────────────────────────
    if (FROM_EMAIL) {
      sgMail
        .send({
          to: process.env.SENDGRID_FROM_EMAIL,
          from: FROM_EMAIL,
          templateId: "d-53501dc7f88b43d2bca9f484703d62c4", 
          dynamicTemplateData: {
            name: cleanName,
            email: cleanEmail,
            position: cleanPosition,
          },
        })
        .catch((err) =>
          console.error("Admin email failed:", err.response?.body || err.message)
        );
    }

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Error saving job application:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}