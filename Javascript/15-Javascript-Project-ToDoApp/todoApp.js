/* Listeye Eleman Ekleme */

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input'); //arama yapmak için search classının altındaki inputlara ualştık.

//listeden aldığım elemanı ekledim.
const generateTemplate = todo => {
    const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span> 
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
    list.innerHTML += html; //her yeni eklediğimizi html templateimize ekledik.
}

addForm.addEventListener('submit', e => {
    e.preventDefault(); //sayfanın yenilenmesini engellemiş olduk.
    const todo = addForm.add.value.trim(); //name'i add olanın value değerine ulaştık.başında ve sonundaki boşlukları kaldırdık
    //console.log(todo);
    if (todo.length > 0) {
        generateTemplate(todo);
        addForm.reset();
    }

})

/*Listeden Eleman Kaldırma */

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')); //delete classını içeriyorsa
    {
        e.target.parentElement.remove(); //eriştiğimiz listeye ulaşıp onu siler.
    }
})

/*yeni bir metot tanımlıyoruz girilen değer neyse aşağıda göstermesi için term'i içine atıyoruz.*/
const filterTodos = term => {
    // console.log(term); //doğru değeri alıp almadığımızı kontrol ediyoruz.
    // console.log(list.children); //list içindeki alt elemanları konsola yazdırdık.
    // console.log(Array.from(list.children));

    Array.from(list.children) //her bir li etiketini temsil ediyor
        .filter(todo => !todo.textContent.toLowerCase().includes(term)) //her bir li etiketi bizim term değerimizi içermiyorsa
        .forEach(todo => todo.classList.add('filtered')); //eğer değeri içermiyorsa filtered classını ekliyoruz bu da ekranda görünmemesini sağlıyor.

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase.includes(term))
        .forEach(todo => todo.classList.remove('filtered')); //eğer içeriyorsa filtered classını kaldırıp görünür yaptık.


}






/*Liste Elemanları içinde arama yapma */
/*klavyeye yazıp elimizi çektiğimizdeki algınan method keyup methodudur. */
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); //girdiğimiz değere erişiyoruz.Baştaki ve sondaki boşlukları silmek için trim methodunu kullanıyoruz. 
    //console.log(term); //girdiğimiz değeri doğru alıyor mu diye kontrol ettik.
    filterTodos(term);

})