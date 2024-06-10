-- CreateTable
CREATE TABLE "Sales" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "drink_id" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_drink_id_fkey" FOREIGN KEY ("drink_id") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
