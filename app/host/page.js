import Table from '@/app/components/table';

export const revalidate = 10;

export default function Host() {
  return (
    <div className='-center'>
      <Table type={'host'} />
    </div>
  );
}
