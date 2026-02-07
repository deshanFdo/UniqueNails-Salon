import { NextResponse } from 'next/server';

/**
 * Security Middleware
 * Runs on every request to enforce security policies
 */
export function middleware(request) {
    const response = NextResponse.next();
    const { pathname } = request.nextUrl;

    // Block access to sensitive files
    const sensitivePatterns = [
        /\.env/i,
        /\.git/i,
        /\.htaccess/i,
        /wp-admin/i,
        /wp-login/i,
        /xmlrpc\.php/i,
        /\.sql/i,
        /\.bak/i,
        /\.log/i,
    ];

    for (const pattern of sensitivePatterns) {
        if (pattern.test(pathname)) {
            return new NextResponse(null, { status: 404 });
        }
    }

    // Rate limiting headers (for use with edge functions/CDN)
    response.headers.set('X-RateLimit-Policy', 'sliding-window');

    return response;
}

// Only run middleware on specific paths (not on static files)
export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images/ (public images)
         * - fonts/ (font files)
         */
        '/((?!_next/static|_next/image|favicon.ico|images/|fonts/).*)',
    ],
};
