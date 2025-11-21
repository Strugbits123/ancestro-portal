// import AWS from "aws-sdk";
// import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";

// const s3 = new AWS.S3({
//   region: process.env.AWS_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// export async function POST(req) {
//   try {
//     const { fileName, fileType, field } = await req.json();

//     console.log("Received fileName:", fileName);
//     console.log("Received fileType:", fileType);
//     console.log("Field:", field);

//     if (!fileName || !fileType || !field) {
//       return NextResponse.json(
//         { error: "Missing fileName, fileType, or field" },
//         { status: 400 }
//       );
//     }

//     // 🔥 SAME structured key you used before
//     const fileKey = `ancestro-portal/${field}/${uuidv4()}_${fileName}`;

//     const s3Params = {
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: fileKey,
//       ContentType: fileType,
//     };

//     // 🔥 Generate signed URL
//     const uploadURL = await s3.getSignedUrlPromise("putObject", s3Params);

//     // 🔥 Public object URL (used in saving)
//     const objectURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

//     console.log("uploadURL:", uploadURL);
//     console.log("objectURL:", objectURL);

//     return NextResponse.json(
//       { uploadURL, fileKey, objectURL },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Error generating signed URL:", err);
//     return NextResponse.json(
//       { error: "Failed to create upload URL" },
//       { status: 500 }
//     );
//   }
// }





import AWS from "aws-sdk";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// const s3 = new AWS.S3({
//   region: process.env.AWS_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  try {
    const { fileName, fileType, field } = await req.json();

    console.log("Received fileName:", fileName);
    console.log("Received fileType:", fileType);
    console.log("Field:", field);

    if (!fileName || !fileType || !field) {
      return NextResponse.json(
        { error: "Missing fileName, fileType, or field" },
        { status: 400 }
      );
    }

    // 🔥 SAME structured key you used before
    const fileKey = `ancestro-portal/${field}/${uuidv4()}_${fileName}`;
 
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
      ContentType: fileType,
    });

    // 🔥 Generate signed URL
    // const uploadURL = await s3.getSignedUrlPromise("putObject", s3Params);

    const uploadURL = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // 🔥 Public object URL (used in saving)
    const objectURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

    console.log("uploadURL:", uploadURL);
    console.log("objectURL:", objectURL);

    return NextResponse.json(
      { uploadURL, fileKey, objectURL },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error generating signed URL:", err);
    return NextResponse.json(
      { error: "Failed to create upload URL" },
      { status: 500 }
    );
  }
}
