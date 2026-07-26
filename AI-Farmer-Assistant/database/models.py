from datetime import datetime
from database.database import db


# ===========================
# Farmer Table
# ===========================
class Farmer(db.Model):
    __tablename__ = "farmers"

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    mobile = db.Column(db.String(15))
    state = db.Column(db.String(100))
    district = db.Column(db.String(100))
    village = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Farmer {self.fullname}>"


# ===========================
# Crop Recommendation History
# ===========================
class CropPrediction(db.Model):
    __tablename__ = "crop_predictions"

    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("farmers.id"),
        nullable=False
    )

    nitrogen = db.Column(db.Float)
    phosphorus = db.Column(db.Float)
    potassium = db.Column(db.Float)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)
    ph = db.Column(db.Float)
    rainfall = db.Column(db.Float)

    predicted_crop = db.Column(db.String(100))

    prediction_date = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# ===========================
# Disease Detection
# ===========================
class DiseasePrediction(db.Model):
    __tablename__ = "disease_predictions"

    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("farmers.id"),
        nullable=False
    )

    image_name = db.Column(db.String(255))
    disease_name = db.Column(db.String(100))
    confidence = db.Column(db.Float)
    medicine = db.Column(db.String(255))

    prediction_date = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# ===========================
# Fertilizer Recommendation
# ===========================
class FertilizerPrediction(db.Model):
    __tablename__ = "fertilizer_predictions"

    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("farmers.id"),
        nullable=False
    )

    crop_name = db.Column(db.String(100))
    soil_type = db.Column(db.String(100))

    nitrogen = db.Column(db.Float)
    phosphorus = db.Column(db.Float)
    potassium = db.Column(db.Float)

    recommended_fertilizer = db.Column(db.String(100))

    prediction_date = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# ===========================
# Weather History
# ===========================
class WeatherHistory(db.Model):
    __tablename__ = "weather_history"

    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("farmers.id"),
        nullable=False
    )

    city = db.Column(db.String(100))
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)
    weather = db.Column(db.String(100))

    checked_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# ===========================
# AI Chat History
# ===========================
class ChatHistory(db.Model):
    __tablename__ = "chat_history"

    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("farmers.id"),
        nullable=False
    )

    question = db.Column(db.Text)
    answer = db.Column(db.Text)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# ===========================
# Market Price
# ===========================
class MarketPrice(db.Model):
    __tablename__ = "market_prices"

    id = db.Column(db.Integer, primary_key=True)

    crop_name = db.Column(db.String(100), nullable=False)

    market_name = db.Column(db.String(100))

    state = db.Column(db.String(100))

    price = db.Column(db.Float)

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )