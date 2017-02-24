app.controller('acordionCtrl', ['$scope',  function($scope){
  $scope.oneAtATime = true;

 $scope.groups = [
   {
     title: '?איך מחברים את הקבוצות לדירה',
     content: 'המערכת מחברת בין הרוכשים לפי תמהילי ההשקעה השונים'
   },
   {
     title: '?מה ההיתרונות שלי כמשקיע בערוץ זה',
     content: ' פער מחירים בין דירה על הנייר לדירה בנויה. אפשרות להנות מהצמדה למדד הנדל״ן. פיזור סיכונים. אין צורך לקחת משכנתא. טג מחיר נמוך מאד להשתתפות ביחס לחלופות'
   },
   {
     title: '?אלו ערבויות אתם נותנים',
     content: 'הערבות היא מול היזם על פי חוק מכר דירות',
   },
   {
     title: '?מי אחראי על מכירת הנכס ומימוש העיסקה',
     content: 'אנחנו בליווי משרד העורך דין נדאג לכך שהדירה תצא לשוק חודשיים לפני תום הבנייה. אנו נטפל בכל הליך המכירה עד שלב העברת הכסף מחשבון נאמנות לחברי הקבוצה'
   }
 ];

 $scope.items = ['Item 1', 'Item 2', 'Item 3'];

 $scope.addItem = function() {
   var newItemNo = $scope.items.length + 1;
   $scope.items.push('Item ' + newItemNo);
 };

 $scope.status = {
   isCustomHeaderOpen: false,
   isFirstOpen: true,
   isFirstDisabled: false
 };
}])
