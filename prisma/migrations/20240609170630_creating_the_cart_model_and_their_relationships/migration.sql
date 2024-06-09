-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "drink_id" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_drink_id_fkey" FOREIGN KEY ("drink_id") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
