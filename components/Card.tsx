


export default function Card(){

  return (
    <a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl bg-gray-50 dark:bg-black hover:bg-gray-50">

    <div class="grid grid-cols-6 p-5 gap-y-2">

      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>

      <div class="col-span-5 md:col-span-4 ml-4">

        <p class="text-sky-500 font-bold text-xs"> 7+ SPOTS LEFT </p>

        <p class="text-gray-600 font-bold"> [Beginner] Light Discussion </p>

        <p class="text-gray-400"> Fri, Mar 11 . 8:00 - 9:30 AM </p>

        <p class="text-gray-400"> Beginner speakers </p>

      </div>

      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> FREE </p>
      </div>

    </div>

  </a>
  )
}