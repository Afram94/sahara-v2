import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sahara Restaurang & Lounge - Libanesisk & Mellanöstern Mat i Norrköping';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.07,
          }}
        />

        {/* Gold top border line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
          }}
        />

        {/* Gold bottom border line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
          }}
        />

        {/* Main logo text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '96px',
              fontWeight: 'bold',
              color: '#d4af37',
              letterSpacing: '-2px',
              fontFamily: 'serif',
            }}
          >
            SAHARA
          </span>
          <span
            style={{
              fontSize: '96px',
              fontWeight: 'bold',
              color: '#ffffff',
              letterSpacing: '-2px',
              fontFamily: 'serif',
            }}
          >
            LOUNGE
          </span>
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: '120px',
            height: '2px',
            background: '#d4af37',
            marginBottom: '28px',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          Libanesisk & Mellanöstern Mat · Norrköping
        </div>
      </div>
    ),
    { ...size }
  );
}
