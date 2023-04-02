import Table from '@/app/components/table';

export const revalidate = 10;

export default function WaitListLastWeek() {
  return (
    <div className='-center'>
      <Table type={'wait'} />
    </div>
  );
}
