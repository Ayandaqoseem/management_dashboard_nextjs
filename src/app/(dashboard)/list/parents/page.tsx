import Pagination from "@/components/Pagination";
import Table from "@/components/table/Table"
import TableSearch from "@/components/table/TableSearch"
import { parentsData, role } from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

type Parent = {
    id: number;
    name: string;
    email?:string;
    students:string[];
    phone: string;
    address:string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Names",
        accessor: "students",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Action",
        accessor: "action"
    }
]

const ParentsListPage = () => {

    const renderRow = (item: Parent) => (
    <tr key={item.id} className="border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight">
        <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs">{item?.email}</p>
            </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(",")}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-skyBlue">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-customPurple">
                            <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                        )}
                </div>
            </td>
    </tr>
    )
  return (
    <div className='bg-white p-4 flex-1 rounded-md mt-0 m-4'>
        {/* TOP */}
        <div className="flex justify-between items-center">
            <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
                        <Image src="/filter.png" alt="" width={20} height={20} />
                    </button>
                    <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
                        <Image src="/sort.png" alt="" width={20} height={20} />
                    </button>
                    <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
                        <Image src="/plus.png" alt="" width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={parentsData} />

        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default ParentsListPage