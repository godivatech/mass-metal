import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 bg-surface">
            <Container className="text-center">
                <h2 className="mb-4 text-4xl font-bold text-primary">404 - Page Not Found</h2>
                <p className="mb-8 text-gray-500 text-lg">
                    Sorry, we couldn't find the page you were looking for.
                </p>
                <Button asChild>
                    <Link href="/">Return Home</Link>
                </Button>
            </Container>
        </div>
    );
}
