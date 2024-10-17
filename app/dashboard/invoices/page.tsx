import CustomersTable from "@/app/ui/customers/table";
import { customers } from "@/app/lib/placeholder-data";

function Page() {
  return (
    <div>
      <div>
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
}

export default Page;
