document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.querySelector('input[name="question1"]:checked').value;
    let resultText;

    if (answer === 'B') {
        resultText = "Benar! Kondisi harness harus selalu diperiksa sebelum digunakan.";
    } else {
        resultText = "Salah. Jawaban yang benar adalah Kondisi harness.";
    }

    document.getElementById('result').innerText = resultText;
});
