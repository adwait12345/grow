export default function Summary_Skeleton() {
  return (
    <div className="w-full flex flex-col animate-pulse items-center mt-6 ">
      <div className="flex flex-col w-full gap-6   ">
        <h2 className=" h-3 w-36 bg-slate-300 rounded-lg	"></h2>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className=" h-3 w-28 bg-slate-300 rounded "></p>
            <p className=" h-3 w-24 bg-slate-300 rounded "></p>
            <p className=" h-3 w-20 bg-slate-300 rounded "></p>
          </div>
          <div className="flex flex-col gap-2 justify-end items-end">
            <p className=" h-3 w-16 bg-slate-300 rounded "></p>
            <p className=" h-3 w-12 bg-slate-300 rounded "></p>
            <p className=" h-3 w-10 bg-slate-300 rounded "></p>
          </div>
        </div>
      </div>
    </div>
  );
}
