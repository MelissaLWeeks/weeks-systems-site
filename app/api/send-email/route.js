import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      formType,
      name,
      email,
      subject,
      message,
      businessName,
      businessWebsite,
      websiteType,
      projectDetails,
      features,
      additionalInfo,
    } = data;

    const isWebsiteInquiry = formType === "website-inquiry";

    const emailSubject = isWebsiteInquiry
      ? `New Website Inquiry${businessName ? ` - ${businessName}` : ""}`
      : `New Weeks Systems Message${subject ? ` - ${subject}` : ""}`;

    const emailBody = isWebsiteInquiry
      ? `
NEW WEBSITE PROJECT INQUIRY

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Business Name: ${businessName || "Not provided"}
Current Website: ${businessWebsite || "Not provided"}
Website Type: ${websiteType || "Not provided"}

PROJECT DETAILS
${projectDetails || "Not provided"}

FEATURES
${features?.length ? features.join(", ") : "None selected"}

ADDITIONAL INFORMATION
${additionalInfo || "Not provided"}
`
      : `
NEW CONTACT FORM MESSAGE

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Subject: ${subject || "Not provided"}

MESSAGE
${message || "Not provided"}
`;

    const result = await resend.emails.send({
      from: "Weeks Systems <onboarding@resend.dev>",
      to: "melissa@weekssystems.com",
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    });

    if (result.error) {
      console.error(result.error);

      return Response.json(
        { success: false, error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: "Email could not be sent." },
      { status: 500 }
    );
  }
}