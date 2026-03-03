import Papa from 'papaparse';

export async function getSchedule() {
  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYEuEAEcQcvMqciTKYU3OKpymhZUa77Hmpz79LqHjDWa4LWRVmCp7AgYz0YidQcnUVFXNbG_3hHnrh/pub?output=csv";

  try {
    // We add revalidate: 0 to force Next.js to fetch fresh data on every request
    const response = await fetch(CSV_URL, { 
      cache: 'no-store',
      next: { revalidate: 0 } 
    });

    if (!response.ok) throw new Error('Failed to fetch schedule');
    
    const csvText = await response.text();
    
    const { data } = Papa.parse(csvText, { 
      header: false, 
      skipEmptyLines: true 
    });

    return data.slice(4).map((row: any) => ({
      Time: row[1] || '',
      Monday: row[2] || '',
      Tuesday: row[3] || '',
      Wednesday: row[4] || '',
      Thursday: row[5] || '',
      Friday: row[6] || '',
      Saturday: row[7] || '',
      Sunday: row[8] || '',
    })).filter((r: any) => r.Time && r.Time !== "NOTES");
    
  } catch (error) {
    console.error("Schedule fetch error:", error);
    return [];
  }
}