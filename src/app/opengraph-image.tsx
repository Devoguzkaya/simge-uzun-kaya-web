import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Simge Uzun Kaya | Sinop Psikolojik Danışman';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #fff7ed, #ffedd5)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Dekoratif Yan Çizgi */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 20,
                        height: '100%',
                        background: '#ff7d3e',
                    }}
                />

                {/* Ana İçerik */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#1c1917',
                            textAlign: 'center',
                        }}
                    >
                        Simge Uzun Kaya
                    </div>

                    <div
                        style={{
                            fontSize: 40,
                            color: '#ff7d3e',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Psikolojik Danışman
                    </div>

                    <div
                        style={{
                            marginTop: 40,
                            fontSize: 32,
                            color: '#44403c',
                            display: 'flex',
                            gap: '15px',
                            alignItems: 'center',
                        }}
                    >
                        <span>Sinop</span>
                        <span style={{ color: '#d6d3d1' }}>|</span>
                        <span>Çocuk</span>
                        <span style={{ color: '#d6d3d1' }}>|</span>
                        <span>Ergen</span>
                        <span style={{ color: '#d6d3d1' }}>|</span>
                        <span>Aile</span>
                    </div>
                </div>

                {/* Alt Bilgi */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        fontSize: 24,
                        color: '#78716c',
                    }}
                >
                    simgeuzunkaya.com
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
