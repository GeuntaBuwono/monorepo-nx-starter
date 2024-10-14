import { Button } from '@monorepo-nx/shared';

export default async function Index() {
  return (
    <div className="bg-slate-600 h-screen w-full flex items-center justify-center ">
      <h1 className="text-white text-6xl">Hello world</h1>
      <Button variant="outline">Shared button</Button>
    </div>
  );
}
