import os
import requests
import json
from flask import Flask, session, render_template, request, jsonify , redirect, g, url_for
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from models import*
from random import randint
app = Flask(__name__)

# Check for environment variable
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


job_of_p=""

@app.route("/" , methods=['GET','POST'])
def index():
    return render_template("index.html")



@app.route("/signup", methods=["POST"])
def signup():
    username = request.form.get("username")
    password = request.form.get("password")
    code1 = request.form.get("code")
    print(username)
    print(password)
    print(code1)

    pInf = code.query.filter_by(code=code1).all()

    if not pInf:
        return jsonify ({"code_bool":True, "name_bool":True})

    person_name_exist = staff.query.filter_by(name=username).first()
    if person_name_exist:
        return jsonify({"code_bool":False,"name_bool":True})

    p = staff(name=username, password=password, job=pInf[0].job, salary=pInf[0].salary, real_name=pInf[0].real_name )
    print(p)
    db.session.add(p)
    db.session.delete(pInf[0])
    db.session.commit()


    return jsonify({"code_bool":False,"name_bool":False})


@app.route("/signin", methods=["POST"])
def login():
    global job_of_p
    username = request.form.get("username")
    password = request.form.get("password")

    person_inf = staff.query.filter_by(name=username).first()
    if  person_inf:
        print(username)
        print(password)
        print(person_inf.password)
        if person_inf.password==password:
            job_of_p = person_inf.job
            print(job_of_p)
            return jsonify({"bool":1})
        return jsonify({"bool":2})
    return jsonify({"bool":3})

@app.context_processor
def inject_dict_for_all_templates():
    global job_of_p
    return dict(person=job_of_p)
@app.route("/manager", methods=['GET'])
def manager():
    global job_of_p

    return render_template("manager.html")

@app.route("/customerManagement", methods=['GET'])
def customerManagement ():
    global job_of_p
    return render_template("customerManagement.html")

@app.route("/feedback")
def feedback ():
    global job_of_p
    return render_template("feedback.html")

@app.route("/orders")
def orders ():
    global job_of_p
    return render_template("orders.html")


@app.route("/reserveTable", methods=['GET'])
def reserv():
    return render_template("reserveTable.html")

@app.route("/staff", methods=['GET'])
def stff():
    list_of_inf = []
    all_staff_inf1 = staff.query.all()
    all_staff_inf2 = code.query.all()
    print(all_staff_inf1[0].password)
    for p in all_staff_inf1:
        list_of_inf.append({'name': p.real_name, 'job': p.job, 'salary':p.salary})

    for p in all_staff_inf2:
        list_of_inf.append({'name': p.real_name, 'job': p.job, 'salary':p.salary})

    return render_template("stuffManagement.html", list_of_inf=list_of_inf )

@app.route("/hire", methods = ['POST'])
def hire():
    name = request.form.get("hireName")
    salary = request.form.get("hireSalary")
    job = request.form.get("hireStaffRole")
    code1 = randint(10000,99999)
    code1 = str(code1)
    c = code(job=job, salary=salary, code=code1 ,real_name=name )
    db.session.add(c)
    db.session.commit()
    return jsonify({"code":code1})

@app.route("/fire", methods=['POST'])
def fire():
    name = request.form.get("name")
    p = staff.query.filter_by(real_name=name).first()
    if not p:
        p = code.query.filter_by(real_name = name).first()
    db.session.delete(p)
    db.session.commit()

    return jsonify({"stat": "done"})

@app.route("/edit1", methods=['POST'])
def edit1():
    name = request.form.get("name")
    job = request.form.get("job")
    salary = request.form.get("salary")
    p = staff.query.filter_by(real_name=name).first()
    if not p:
        p = code.query.filter_by(real_name = name).first()
    if job or salary:
        if job:
            p.job = job
        if salary:
            p.salary = salary
        db.session.commit()
        return jsonify({"stuts":"done2"})

    return jsonify({"stuts":"Failed"})

@app.route("/stock", methods=['GET'])
def stock_view():
    list_of_inf = []
    all_staff_inf = stock.query.all()
    for p in all_staff_inf:
        list_of_inf.append({'name': p.name, 'quantity': p.quantity, 'price':p.price})


    return render_template( "stockManagement.html",list_of_inf=list_of_inf)

@app.route("/create", methods = ['POST'])
def create():
    name = request.form.get("itemName")
    quantity = request.form.get("itemQuantity")
    price = request.form.get("itemPrice")
    s = stock(name=name, quantity=quantity ,price=price )
    db.session.add(s)
    db.session.commit()
    return jsonify({"state":"done"})

@app.route("/remove", methods=['POST'])
def remove():
    name = request.form.get("name")
    p = stock.query.filter_by(name=name).first()
    db.session.delete(p)
    db.session.commit()

    return jsonify({"stat": "done"})

@app.route("/edit", methods=['POST'])
def edit():
    name = request.form.get("name")
    quantity = request.form.get("quantity")
    price = request.form.get("price")
    p = stock.query.filter_by(name=name).first()
    if price:
        p.price = price
    if quantity:
        p.quantity = quantity
    db.session.commit()

    return jsonify({"stuts":"done2"})


@app.route("/menuManagement", methods=['GET'])
def menuManagement ():
    global job_of_p
    print(job_of_p)
    offers = offer.query.all()
    items = menu.query.all()
    list_of_inf1 = []
    list_of_inf2 = []
    for i in offers:
        list_of_inf1.append({'name': i.name, 'type': i.type, 'parag':i.parag ,'price':i.price})
    for i in items:
        list_of_inf2.append({'name': i.name,  'parag':i.parag ,'price':i.price})

    return render_template("menuManagement.html", list_of_inf1=list_of_inf1, list_of_inf2=list_of_inf2)


@app.route("/create_offer", methods = ['POST'])
def create_offer():
    name = request.form.get("itemName")
    type = request.form.get("offerChosen")
    price = request.form.get("itemPrice")
    print(type)
    print(price)
    s = offer(name=name, type=type ,price=price )
    db.session.add(s)
    db.session.commit()
    return jsonify({"state":"done"})

@app.route("/create_menu", methods = ['POST'])
def create_menu():
    name = request.form.get("itemName")
    parag = request.form.get("parag")
    price = request.form.get("itemPrice")
    s = menu(name=name, parag=parag ,price=price )
    db.session.add(s)
    db.session.commit()
    return jsonify({"state":"done"})

@app.route("/remove_menu", methods=['POST'])
def remove_menu():
    name = request.form.get("name")
    p = menu.query.filter_by(name=name).first()
    if not p:
        p = offer.query.filter_by(name=name).first()
    db.session.delete(p)
    db.session.commit()

    return jsonify({"stat": "done"})

@app.route("/edit_menu", methods=['POST'])
def edit_menu():
    name = request.form.get("name")
    print(name)
    new_name = request.form.get("new_name")
    price = request.form.get("price")
    parag = request.form.get("parag")
    p = menu.query.filter_by(name=name).first()
    print(p)
    if not p:
        p = offer.query.filter_by(name=name).first()
        if new_name:
            p.name = new_name
        if price:
            p.price = price
        db.session.commit()
        return jsonify({"stuts":"done1"})

    if new_name:
        p.name = new_name
    if price:
        p.price = price
    if parag:
        p.parag = parag
    db.session.commit()
    return jsonify({"stuts":"done2"})
# @app.route("/signout", methods=['POST'])
# def signout():
#     return redirect(url_for(index()))
