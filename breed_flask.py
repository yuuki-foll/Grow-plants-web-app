from flask import Flask, render_template, redirect, url_for, request, jsonify
from markupsafe import escape
from textblob import TextBlob
from googletrans import Translator
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json

# flaskの開始
app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify({'message': 'Hello world'})


@app.route('/ana_sent', methods=["POST"])
def sentiment():
    if request.method == "POST":
        print("postが届きました")
        data = request.data.decode('utf-8')
        data = json.loads(data)
        text = data["result"]
        print(text)
        tr = Translator()  #Google translatorのインスタンス
        while True:
            try:
                en_text = tr.translate(text, dest="en").text
                print(en_text)
                analysis = TextBlob(en_text)
                print(analysis.sentiment)
                analyser = SentimentIntensityAnalyzer()
                score = analyser.polarity_scores(en_text)
                print(str(score))
                print(type(score))
                break
            except Exception as e:
                print(e)
                print("e")
                tr = Translator()
        print("score", score)
        print("return!!!!!!!!!!")
        return jsonify(values=json.dumps(score))

    else:
        analysis = TextBlob(
            "TextBlob sure looks like it has some interesting features")
        return jsonify(analysis.sentiment)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8998, debug=True)