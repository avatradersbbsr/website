import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const webappUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (!webappUrl) {
      console.warn("GOOGLE_SHEETS_WEBAPP_URL is not set. Simulating form submission.");
      return NextResponse.json({ status: "success", simulated: true });
    }

    const response = await fetch(webappUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        email: data.email || "",
        message: data.message,
        productName: data.productName || "General Inquiry",
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets Webapp returned status ${response.status}`);
    }

    return NextResponse.json({ status: "success" });
  } catch (error: any) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      { status: "error", message: error.message || "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
