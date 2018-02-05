
BEGIN;

DROP TABLE IF EXISTS doctors, secretary, patients, appointments CASCADE;


CREATE TABLE "doctors" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL UNIQUE,
	"password" VARCHAR NOT NULL,
	"location" VARCHAR NOT NULL,
	"position" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"image" TEXT NOT NULL
);



CREATE TABLE "secretary" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL UNIQUE,
	"password" VARCHAR NOT NULL,
	"location" VARCHAR,
	"position" TEXT,
	"description" TEXT
);



CREATE TABLE "patients" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"phone" VARCHAR



CREATE TABLE "appointments" (
	"id" SERIAL PRIMARY KEY,
	"id_patient" INTEGER REFERENCES patients(id),
	"id_doctor" INTEGER REFERENCES doctors(id),
	"date" DATE NOT NULL,
	"time-set" TIME NOT NULL,
	"status" VARCHAR
);

COMMIT;
