let salary = window.prompt('Insira seu salário atual:');
let goal = window.prompt('Insira qual sua meta salarial:');

let months = 0;
let newSalary = salary;

while (newSalary < goal){
    months++;
    if (months % 6 === 0) newSalary += newSalary * 0.1

}
window.alert(`O seu salário será R$ ${goal} em ${months} meses.`)