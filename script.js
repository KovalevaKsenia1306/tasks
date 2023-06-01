Vue.component('task',{
    props: ['data'],
    methods: {
      task_done: function() {
        this.$emit('task_done')
      }
    },
    template: `
    <div class="task">
      <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p class="task__desc">{{data.desc}}</p>
      </div>
      <button class="task__done" @click="task_done()">✔️</button>
    </div>`
  })
  
  var vue = new Vue({
    el: '#app',
    data: {
      new_task: {
        title: '',
        desc: ''
      },
      tasks : [
        {
          title: 'Нарядить елку',
          desc: 'Купить новогодние украшения для елки',
        },
        {
          title: 'Повесить гирлянду на окно',
          desc: '',
        }
      ]
    },
    methods: {
      add_task(){
        if(this.new_task.title != ''){
          this.tasks.push({
            title: this.new_task.title,
            desc: this.new_task.desc
          });
          this.new_task.title='';
          this.new_task.desc='';
        }
      },
      delete_task(id){
        this.tasks.splice(id,1);
      }
    }
  })