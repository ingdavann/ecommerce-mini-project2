"use client"
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component"
// import LoadingCom from "../LoadingCom";
import { Input } from "@nextui-org/react";
import LoadingComponent from "@/app/loading";

const columns: TableColumn<productType>[] = [
  {
    name: "ID",
    selector: row => row.id,
    sortable: true
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true
  },
  {
    name: 'Quantity',
    selector: row => row.quantity,
    sortable: true
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true
  },
  {
    name: 'Profile',
    selector:(row): any  => <img src={row.image} width={50} height={50} className="rounded"/>,
  }
]
const handleChange = () => {};

export default function ProductDataTable() {

  const url = "https://store.istad.co/api/products";
  const [getProduct, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [getSearch, setSearch] = useState("");

  const fetchUser = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setProduct(result.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  const paginationComponent = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All rows",
  };
  return (
    <>
      <DataTable
        progressComponent={<LoadingComponent/>}
        progressPending={isLoading}
        pagination
        selectableRows
        onSelectedRowsChange={handleChange}
        columns={columns}

        subHeader
        subHeaderComponent={
          <Input type="text" className="rounded"
          label="Search"
          isClearable
          radius="lg"
          value={getSearch}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search..."
          />
        }
        paginationComponentOptions={paginationComponent}
        data={getProduct}
      />
    </>

  )
}