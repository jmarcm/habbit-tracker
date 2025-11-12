import supabase from "./supabase-client";

export async function fetchAllHabitsWithLogs() {
    // const { data, error } = await supabase
    //     .from('habits')
    //     .select("id, name, daily_amount");
    const { data, error } = await supabase.rpc('get_habits_with_today_logs');
    // if (error) {
    //     console.error(error);
    // } else {
    //     console.log("data", data);
    // }


    data.forEach(habit => {
        habit.status = "todo";
    });
    
    return data;
}