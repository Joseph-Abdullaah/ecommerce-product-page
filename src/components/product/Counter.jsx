import { Button } from "@/components/ui/button";
import useCounterStore from "@/store/counterStore";

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="flex items-center gap-4 bg-slate-100 px-3 py-2 rounded-xl w-max">
      <Button
        variant="ghost"
        size="icon"
        className="text-orange-500"
        onClick={decrement}
        disabled={count <= 1}
      >
        -
      </Button>
      <span className="font-bold text-lg">{count}</span>
      <Button variant="ghost" size="icon" className="text-orange-500" onClick={increment}>
        +
      </Button>
    </div>
  );
}

export default Counter;
