import Table from '@/app/components/table';

export const revalidate = 10;

export default function WantToPlay() {
  return (
    <div className='-center'>
      <Table type={'want'} />
    </div>
  );
}
