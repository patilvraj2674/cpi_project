from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flash messages

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/apps')
def apps():
    return render_template('apps.html')

@app.route('/band')
def band():
    return render_template('band.html')

@app.route('/guides')
def guides():
    return render_template('guides.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Placeholder for processing the contact form (e.g., send an email)
        flash(f"Thank you {name}, we have received your message!", "success")
        return redirect(url_for('contact'))  # Redirect to the contact page after submission

    return render_template('contact.html')

# Route for the 3D model page
@app.route('/model')
def model():
    return render_template('model.html')

if __name__ == '__main__':
    app.run(debug=True)
