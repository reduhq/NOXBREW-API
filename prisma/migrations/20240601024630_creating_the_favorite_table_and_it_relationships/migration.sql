-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "drink_id" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_drink_id_fkey" FOREIGN KEY ("drink_id") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
