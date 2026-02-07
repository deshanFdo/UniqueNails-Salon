'use client';

export default function CalendarBooking() {
  const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || '';
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567';
  const phoneClean = phone.replace(/[^+\d]/g, '');

  // Only render if calendar URL is configured
  if (!calendarUrl || calendarUrl.includes('YOUR_CALENDAR_ID')) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        padding: '60px 40px',
        textAlign: 'center',
        borderRadius: '4px'
      }}>
        <div style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          marginBottom: '10px',
          color: 'var(--text-primary)'
        }}>Online Booking Coming Soon</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Call me to schedule your appointment
        </p>
        <a href={`tel:${phoneClean}`} className="btn btn-outline" style={{ marginTop: '20px' }}>
          {phone}
        </a>
      </div>
    );
  }

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      padding: '20px',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <iframe
        src={calendarUrl}
        style={{
          border: 0,
          width: '100%',
          height: '600px',
          background: 'var(--bg-card)'
        }}
        frameBorder="0"
        scrolling="no"
        title="Book an Appointment"
        loading="lazy"
      />
    </div>
  );
}
