from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

from flask import request

@app.route("/crop", methods=["GET", "POST"])
def crop():

    if request.method == "POST":

        prediction = "Rice"

        return render_template(
            "crop.html",
            prediction=prediction,
            description="Rice is suitable for your soil.",
            confidence=96,
            temperature=request.form["temperature"],
            humidity=request.form["humidity"],
            ph=request.form["ph"],
            rainfall=request.form["rainfall"],
            fertilizer="NPK 10:26:26",
            irrigation="Water every 3 days."
        )

    return render_template("crop.html")
    return render_template("crop.html")

@app.route("/weather")
def weather():
    return render_template("weather.html")

@app.route("/market")
def market():
    return render_template("market.html")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404

@app.errorhandler(500)
def server_error(error):
    return render_template("500.html"), 500

if __name__ == "__main__":
    app.run(debug=True)