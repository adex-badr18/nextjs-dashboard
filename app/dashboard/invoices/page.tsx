import { fetchCardData, fetchLatestInvoices } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";

const Page = async () => {
    const latestInvoices = await fetchLatestInvoices();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Invoices
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
};

export default Page;
