import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useTable } from "../hooks/useTable";
import { useTableActions } from "../hooks/useTableActions";
import TableNotFound from "../components/TableNofFound";
import PageLayout from "@/layouts/PageLayout";
import TableLoading from "../components/TableLoading";

export default function TablePage() {
  const { token } = useParams();

  const navigate = useNavigate();

  const { data: table, isLoading, isError } = useTable(token);

  const { setTable } = useTableActions();

  useEffect(() => {
    if (!table) return;

    setTable(table);

    navigate("/menu", {
      replace: true,
    });
  }, [table, navigate, setTable]);

  if (isLoading) {
    return (
      <PageLayout>
        <TableLoading />
      </PageLayout>
    );
  }

  if (isError) {
    return (
      <PageLayout>
        <TableNotFound />
      </PageLayout>
    );
  }

  return null;
}
