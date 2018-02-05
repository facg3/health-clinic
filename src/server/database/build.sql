
BEGIN;

DROP TABLE IF EXISTS doctors, secretary, patients, appointments CASCADE;


CREATE TABLE "doctors" (
	"id" serial PRIMARY KEY,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"location" varchar NOT NULL,
	"position" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"image" text NOT NULL
);



CREATE TABLE "secretary" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"location" varchar,
	"position" TEXT,
	"description" TEXT
);



CREATE TABLE "patients" (
	"id" serial PRIMARY KEY,
	"name" varchar(100) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"DOB" DATE NOT NULL,
	"note" TEXT NOT NULL,
	"visit" integer NOT NULL,
	"time" TIME NOT NULL,
	"interval" integer NOT NULL
);



CREATE TABLE "appointments" (
	"id" serial PRIMARY KEY,
	"id_patient" integer REFERENCES patients(id),
	"id_doctor" integer REFERENCES doctors(id),
	"date" DATE NOT NULL,
	"time-set" TIME NOT NULL,
	"status" varchar
);

--
-- ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("id_patient") REFERENCES "patients"("id");
-- ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk1" FOREIGN KEY ("id_doctor") REFERENCES "doctors"("id");


COMMIT;
