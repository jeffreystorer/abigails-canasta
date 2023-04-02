import Table from '@/app/components/table';

export const revalidate = 10;

export default function PlayerInfo() {
  return (
    <div className='-center'>
      <Table type={'playerinfo'} />
    </div>
  );
}
