

import { Container, Stack } from '@/shared/ui'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container>
            <Stack gap={4}>
                <Stack flexDirection="column" style={{
                    flex: "0 0 100%",
                    overflow: "hidden"
                }}
                    gap={2}
                >
                    {children}
                </Stack>
            </Stack>
        </Container>
    )
}

