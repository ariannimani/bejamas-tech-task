import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex gap-6 items-center p-4">
      <div>
        <div className="font-bold">Samurai King resting</div>
        <div className="text-stone-500">$100</div>
      </div>
      <Image
        src="https://images.pexels.com/photos/15347387/pexels-photo-15347387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
        width={1024}
        height={1024}
        className="w-[149px] h-[86] object-cover"
      />
    </div>
  );
};

export default CartItem;
