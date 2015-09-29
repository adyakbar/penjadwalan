router.route('/:id')
	.get(auth,function(req,res) {
		var id_mahasiswa = req.params.id;
		req.getConnection(function(err,conn) {
			var query = conn.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ? LIMIT 1 ",id_mahasiswa,function(err,data) {
				if(err) console.log(err);
				// mahasiswa not found
				if(data.length < 1)
					return res.send("Mahasiswa Not Found");
				res.send(data[0]);
			});
		});
	})

	.put(auth,function(req,res) {
		var id_mahasiswa = req.params.id;
		var dataMahasiswa = {
			rfid 	: req.body.rfid,
			nama 	: req.body.nama,
			nim 	: req.body.nim
		};
		req.getConnection(function(err,conn) {
			var query = conn.query("UPDATE mahasiswa set ? WHERE id_mahasiswa = ? ",[dataMahasiswa,id_mahasiswa],function(err,data) {
				if(err) console.log(err);
				res.json({ success: true, message: "Data Updated" });
			});
		});
	})

	.delete(auth,function(req,res) {
		var id_mahasiswa = req.params.id;
		req.getConnection(function(err,conn){
			var query = conn.query("DELETE FROM mahasiswa WHERE id_mahasiswa = ? ",id_mahasiswa,function(err,data) {
				if(err) console.log(err);
				res.json({ success: true, message: "Data Deleted" });
			});
		});
	});




.post(auth,function(req,res) {
		var dataMahasiswa = {
			nama_mahasiswa	: req.body.nama,
			nim		: req.body.nim,
			rfid		: req.body.rfid,
			angkatan	: req.body.angkatan
		};
		req.getConnection(function(err,conn) {
			var query = conn.query("INSERT INTO mahasiswa set ? ",dataMahasiswa,function(err,data){
				if(err) console.log(err);
				res.json({ success: true, message: "Data Created" });
			});
		});
	});




router.route('/')
	.get(auth,function(req,res) {
		req.getConnection(function(err,conn) {
			var query = conn.query('SELECT * FROM praktikum', function(err, data) {
				if(err) console.log(err);
				res.json(data);
			});
		});
	})

	.post(auth,function(req,res) {
		var datapraktikum = {
			nama_praktikum : req.body.nama,
			kode 				: req.body.kode,
			semester 		: req.body.semester,
			sks 				: req.body.sks
		};
		req.getConnection(function(err,conn){
			if(err) return ("Tidak Terhubung");
			var query = conn.query("INSERT INTO praktikum set ? ",datapraktikum,function(err,data){
				if(err) console.log(err);
				res.json({ success: true, message: "Data Created" });
			});
		});
	});

router.route(':/id')
	.get(auth,function(req,res) {
		var id_praktikum = req.params.id;
		req.getConnection(function(err,conn){
			var query = conn.query("SELECT * FROM praktikum WHERE id_praktikum = ? LIMIT 1 ",id_praktikum,function(err,rows) {
				if(err) console.log(err);
				// praktikum not found
				if(data.length < 1)
					return res.send("Praktikum Not Found");
				res.send(data[0]);
			});
		});
	})

	.put(auth, function(req,res) {
		var id_praktikum = req.params.id;
		var datapraktikum = {
			nama_praktikum : req.body.nama,
			kode 				: req.body.kode,
			semester 		: req.body.semester,
			sks 				: req.body.sks
		};
		req.getConnection(function(err,conn){
			var query = conn.query("UPDATE praktikum set ? WHERE id_praktikum = ? ",[datapraktikum,id_praktikum],function(err,data) {
				if(err) console.log(err);
				res.json({ success: true, message: "Data Updated" });
			});
		});
	})

	.delete(auth,function(req,res) {
		var id_praktikum = req.params.id;
		req.getConnection(function(err,conn){
			if(err) return ("Tidak Terhubung");
			var query = conn.query("DELETE FROM praktikum WHERE id_praktikum = ? ",id_praktikum,function(err,data) {
				if(err) console.log(err);
				res.json({ success: true, message: "Data Deleted" });
			});
		});
	});