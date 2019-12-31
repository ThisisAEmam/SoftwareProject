import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class staff(db.Model):
    __tablename__ = "staff"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    job = db.Column(db.String, nullable = False)
    salary = db.Column(db.String, nullable = False)
    real_name = db.Column(db.String)



class code(db.Model):
    __tablename__="code"
    id = db.Column(db.Integer, primary_key = True)
    code = db.Column(db.String)
    job = db.Column(db.String)
    salary = db.Column(db.String)
    real_name = db.Column(db.String)

class stock(db.Model):

    __tablename__ = "stocks"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    quantity = db.Column(db.String, nullable = False)
    price = db.Column(db.String, nullable = False)

class menu(db.Model):
    __tablename__ = "menu"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    parag = db.Column(db.String)
    price = db.Column(db.String, nullable = False)


class offer(db.Model):
    __tablename__ = "offer"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    type = db.Column(db.String, nullable = False)
    parag = db.Column(db.String)
    price = db.Column(db.String, nullable = False)
