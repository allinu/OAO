# @Author: Liona Maskros <lionacc@163.com>
# @Date: 2021-01-27 12:20:33
# @Last Modified by: Liona Maskros <lionacc@163.com>
# @Last Modified time: 2021-01-30 23:18:14

import markdown
from rich.console import Console
import os
import uuid
import json

console = Console()

DATA = {}
extensions = [
    "toc",
    "codehilite",
    "footnotes",
    "meta",
    "fenced_code",
    "tables",
    "smarty",
]


def make_blog_all_list():
    """make markdown file info into one Json file"""
    for path, dir_list, file_list in os.walk('.'):
        for file_name in file_list:
            console.log(path, file_name)
            if file_name != ".DS_Store":
                md_file_path = os.path.join(path, file_name)
                tmp_data = md2json(md_file_path)
                console.log(tmp_data)
            else:
                pass
    # self.console.log(data)
    data = json.dumps(DATA, ensure_ascii=False)
    # self.console.log(data)
    with open("./tmp_data.json", "w", encoding="utf-8") as file:
        file.write(data)
    console.log("Local markdown file covert completed.")


def md2json(md_file_path):
    """main program

    main program to realize convert function

    Args:
        md_file_path (path): the markdown file import from
        json_file_path (path): the json file will save to

    Returns:
        dict: the markdown file content

    Raises:
        the path is wrong

    """
    data = {}
    with open(md_file_path) as md_file:
        md = markdown.Markdown(extensions=extensions)
        html = md.convert(md_file.read())
        tmp_data = md.Meta
        console.log(md.Meta)
        # use uuid to solve the same name
        alt_path = uuid.uuid1().hex
        tmp_data["alt_path"] = alt_path
        tmp_data["toc"] = md.toc
        tmp_data["toc_tokens"] = md.toc_tokens
        tmp_data["content"] = html
        data[alt_path] = tmp_data
        DATA[alt_path] = tmp_data
        # self.console.log(md.toc_tokens)
    console.log(data)
    console.log(md_file_path + " -> md2json convert done")
    return data


def run():
    make_blog_all_list()


if __name__ == "__main__":
    run()
