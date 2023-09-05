import Table from "@/components/table";

export const revalidate = 10;

export default function WaitListLastWeek() {
  return (
      <Table type={"wait"} />
  );
}
