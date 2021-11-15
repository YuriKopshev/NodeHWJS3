const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Books names should be sorted in ascending order where books were sorted", () => {
    expect(
      sorting.sortByName([
        "Антогонист",
        "Властелин Колец",
      ])
    ).toEqual([
      "Антогонист",
      "Властелин Колец",
    ]);
  });
  it("Books names should be sorted in ascending order where books same", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
    ]);
  });
});
