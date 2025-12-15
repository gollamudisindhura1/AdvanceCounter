export const saveCount = async(count: number) =>{
    await new Promise((res)=> setTimeout(res, 300));
    localStorage.setItem("count", count.toString());
}

export const loadCount = async(): Promise<number | null> =>{
    await new Promise((res) => setTimeout(res, 300));
    const value = localStorage.getItem("count")
    return value ? Number(value) : null;
}