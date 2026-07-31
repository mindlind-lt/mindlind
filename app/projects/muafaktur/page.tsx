import Image from "next/image";

export default function PageCase1() {
  return (
    <>

      <div>
        <Image 
          src="/images/case-mua-1.png"
          width={1000}
          height={600}
          alt=""
          className="w-full"
        />
      </div>

      <div className="container mx-auto px-8">
        <div>Gradiento</div>
        <div>Pills</div>
      </div>

      <div>
        <div>
          Detail
        </div>
        <div>
          Detail
        </div>
        <div>
          Detail
        </div>
        <div>
          Detail
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum molestiae totam magnam ipsa doloribus, similique mollitia maiores voluptate, suscipit possimus. Esse corrupti molestias perspiciatis et libero possimus nisi magnam!
      </div>

      <div>
        Image
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit asperiores, sint dicta odio facere rem sequi assumenda iure! Reiciendis nihil expedita fugiat accusamus commodi impedit quas soluta eos asperiores.
      </div>

      <div>
        Images grid
      </div>

    </>
  )
}
