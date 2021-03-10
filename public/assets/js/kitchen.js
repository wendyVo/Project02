const leftSideBtns = document.getElementsByClassName('leftSideBtns');
console.log(leftSideBtns.length);
for (let i = 0; i < leftSideBtns.length; i++) {
  leftSideBtns[i].onclick = (e) => {
    console.log('Clicked a btn');
    console.log(e.target.getAttribute('data-idOfDish'));
    let id = e.target.getAttribute('data-idOfDish');
    fetch(`/api/kitchen/ready/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        location.reload();
      });
  };
}