// definisi object, keterangan dan nama jenis BMI
const bmi = {
	kurus: {
		tipe: "Kurus",
		keterangan: "Kondisi tubuh kurus dapat menunjukkan kekurangan nutrisi dan lemak, yang bisa menyebabkan masalah kesehatan seperti kelemahan otot, penurunan energi, dan risiko gangguan makan.",
	},
	normal: {
		tipe: "Normal",
		keterangan: "Kamu normal! Kamu memiliki berat badan yang sehat dan proporsional, dengan risiko lebih rendah terhadap penyakit jantung, diabetes, dan masalah kesehatan lainnya.",
	},
	gemuk: {
		tipe: "Gemuk",
		keterangan: "Kondisi tubuh mu dapat meningkatkan risiko diabetes tipe 2, tekanan darah tinggi, dan penyakit jantung. Penurunan berat badan mungkin disarankan untuk mengurangi risiko kesehatan.",
	},
	obesitas: {
		tipe: "Obesitas",
		keterangan: "Ini adalah kondisi serius! risiko penyakit kronis seperti diabetes, penyakit jantung, stroke, dan kanker. Penanganan medis dan perubahan gaya hidup mungkin diperlukan untuk mengelola obesitas Anda.",
	},
	origin: {
		tipe: "",
		keterangan: "BMI (Body Mass Index) adalah sebuah indeks yang digunakan untuk mengukur dan menentukan status berat badan seseorang.",
	},
};

// Fungsi menghitung BMI
function hitungBMI(berat, tinggi) {
	// validasi angka, jika bukan angka maka alert
	if (!validateNumber(berat)) {
		window.alert("Berat badan hanya boleh di isi angka!");
		return -1;
	}
	if (!validateNumber(tinggi)) {
		window.alert("Tinggi badan hanya boleh di isi angka!");
		return -1;
	}
	return berat / ((tinggi / 100) * (tinggi / 100));
}

// Function Ambil tipe BMI berdasarkan aturan yang diberi
function getTipeBMI(num) {
	if (num < 18.5) {
		return bmi.kurus;
	} else if (num < 25.0) {
		return bmi.normal;
	} else if (num < 30.0) {
		return bmi.gemuk;
	} else {
		return bmi.obesitas;
	}
}

//validasi angka
function validateNumber(num) {
	var regex = /^[0-9.]*$/;
	return regex.test(num);
}

// ketika konten dom berhasil diload
document.addEventListener("DOMContentLoaded", function () {
	// Mengambil element form
	const form = document.getElementById("formBmi");

	// Mengambil input tinggi dan berat badan
	const inputBeratBadan = document.querySelector("#berat-badan");
	const inputTinggiBadan = document.querySelector("#tinggi-badan");

	// Mengambil element result
	const resultNumber = document.getElementById("result");
	const resultText = document.getElementById("result-text");
	const resultExplanation = document.getElementById("result-explanation-text");

	// Isi explanation default
	resultExplanation.innerText = bmi.origin.keterangan;

	// Ketika form di submit
	form.addEventListener("submit", function (e) {
		// Cegah browser me refresh halaman
		e.preventDefault();

		// Ambil value tinggi dan berat badan
		let berat = inputBeratBadan.value;
		let tinggi = inputTinggiBadan.value;

		// menghitung BMI
		let result = hitungBMI(berat, tinggi);

		// jika result tidak menunjukan suatu kesalahan
		if (result != -1) {
			// Ambil tipe bmi
			let bmiResult = getTipeBMI(result);

			resultNumber.innerText = result.toFixed(1);
			resultText.innerHTML = "Kamu <b>" + `${bmiResult.tipe}` + "</b>";
			resultExplanation.innerText = bmiResult.keterangan;
		}
	});

	// Ketika form di reset
	form.addEventListener("reset", function () {
		resultNumber.innerText = 0;
		resultText.innerText = "Hasil BMI mu akan tampil di sini";
		resultExplanation.innerText = bmi.origin.keterangan;
	});
});
