import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PaginationDemo = ({ totalPage }: { totalPage: number }) => {
  const [currentpage, steCurrentPage] = useState<number>(1);

  const router = useRouter();

  const pathname = usePathname();
  const handlePrevious = () => {
    if (currentpage > 1) {
      steCurrentPage(currentpage - 1);
      router.push(`${pathname}?page=${currentpage - 1}`);
    }
  };

  const handleNext = () => {
    if (currentpage < totalPage) {
      steCurrentPage(currentpage + 1);
      router.push(`${pathname}?page=${currentpage + 1}`);
    }
  };
  console.log(currentpage);
  return (
    <div className="flex items-center gap-2 my-5">
      <Button
        onClick={handlePrevious}
        disabled={currentpage === 1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex item-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)]?.map((_, index) => (
        <Button
          onClick={() => {
            steCurrentPage(index + 1);
            router.push(`${pathname}?page=${index + 1}`);
          }}
          key={index}
          variant={currentpage === index + 1 ? "default" : "outline"}
          size="sm"
          className="w-8 h-8 rounded-full flex item-center"
        >
          {index + 1}
        </Button>
      ))}
      <Button
        disabled={currentpage === totalPage}
        onClick={handleNext}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex item-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PaginationDemo;
