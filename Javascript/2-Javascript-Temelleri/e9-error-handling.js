//THROW --Hata mesajı fırlatır.
//throw "500";
//throw 500;
/*throw {
    message: "Something is wrong!",
    code: "ERR_SOMETHING_IS_WRONG",
    status: 400

}*/

//TRY-CATCH --Try içerisinde yazdığınız kodun hata olması durumunda catch metotu çalışır.
try {
    /* const x = 10;
     const y = 20;
     const z = 0;
     z = x + y;*/
    throw {
        message: "Something is wrong!",
        code: "ERR_SOMETHING_IS_WRONG",
        status: 400

    }
} catch (err) {
    console.warn(err);

}
/* Try-catch çalıştıktan sonra dışındaki bütün statementlar çalışabilir.
Hata alırsanız catch içerisinde bir hata fırlatmıyorsanız altındaki ve üstündeki kodlar sorunsuz bir şekilde çalışmaya devam eder.
İsterseniz hata aldıktan sonra da bir şeyler çalıştırabilirsiniz. */

//TRY-CATCH-FINALLY -- Hata alsak da almasak da finally her koşulda çalışır.

console.log("İşlem başladı");

try {
    /*const x = 10;
    const y = 20;
    const z = x + y;
    //z = x + y;*/
    throw {
        message: "Something is wrong!",
        code: "ERR_SOMETHING_IS_WRONG",
        status: 400

    }
} catch (err) {
    console.warn(err);
} finally {
    console.log("Kodumuz çalıştı ve sonuçlar üstte listelendi.")
}

console.log("İşlem tamamlandı");