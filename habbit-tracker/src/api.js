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

    function getProductStatus(value, daily_amount) {
        if (value === null) {
            return "todo";
        }
        if (value < daily_amount) {
            return "in progress";
        }
        if (value === daily_amount) {
            return "done";
        }
        return "unknown";
    }


    data.forEach(habit => {
        habit.status = getProductStatus(habit.value, habit.daily_amount)});

    return data;
}